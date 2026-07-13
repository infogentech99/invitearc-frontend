export default function CoupleMessageEditor({
  coupleMessageFields = [],
  editorData = {},
  updateCoupleMessageField,
  
  handleCoupleMessageImageUpload,
  removeCoupleMessageImage,
}) {
  const renderField = (field) => {
    const name = field.name || field;
    const label = field.label || name
      .replace(/([A-Z])/g, " $1")
      .replace(/_/g, " ")
      .replace(/^./, (str) => str.toUpperCase());
    const type = field.type || "text";
    const value = editorData[name] || "";

    if (name === "coupleMessageCarouselImages") {
      return (
        <div key={name} className="space-y-2">
          <label className="block text-sm font-semibold text-slate-800 font-georgia">
            {label}
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleCoupleMessageImageUpload}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-2 text-sm text-slate-900 cursor-pointer"
          />
          <label className="block text-[11px] font-normal text-slate-600 font-georgia">
            Please upload minimum 6 couple images
          </label>
          {(Array.isArray(editorData.coupleMessageCarouselImages)
            ? editorData.coupleMessageCarouselImages
            : []
          ).length > 0 && (
            <div className="flex flex-wrap gap-3">
              {(Array.isArray(editorData.coupleMessageCarouselImages)
                ? editorData.coupleMessageCarouselImages
                : []
              ).map((image, index) => {
                const src =
                  typeof image === "string"
                    ? image
                    : image?.image || image?.src || "";
                return (
                  <div
                    key={index}
                    className="w-24 rounded-2xl border border-slate-200 bg-white p-2"
                  >
                    {src ? (
                      <img
                        src={src}
                        alt={`Carousel ${index + 1}`}
                        className="h-20 w-full rounded-xl object-cover"
                      />
                    ) : (
                      <div className="flex h-20 w-full items-center justify-center rounded-xl bg-slate-100 text-xs text-slate-500">
                        No image
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => removeCoupleMessageImage(index)}
                      className="mt-2 text-xs font-semibold text-rose-600 cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={name} className="space-y-2">
        <label className="block text-sm font-semibold text-slate-800 font-georgia">
          {label}
        </label>
        {type === "textarea" ? (
          <textarea
            rows={3}
            value={value}
            onChange={(event) =>
              updateCoupleMessageField(name, event.target.value)
            }
            className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(event) =>
              updateCoupleMessageField(name, event.target.value)
            }
            className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {coupleMessageFields.length > 0 ? (
        coupleMessageFields.map((field) => renderField(field))
      ) : (
        <p className="text-sm text-slate-500">
          No couple message fields are available yet.
        </p>
      )}
    </div>
  );
}
