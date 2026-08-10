import dynamic from "next/dynamic";
import { hitchedEditorFields } from "./hindu-wedding/hitched/fields";
import { biyeEditorFields } from "./hindu-wedding/biye/fields";
import { auraEditorFields } from "./hindu-wedding/aura/fields";
import { sohalaEditorFields } from "./hindu-wedding/sohala/fields";
import { laavanEditorFields } from "./sikh-wedding/laavan/fields";
import { starlightEditorFields } from "./sikh-wedding/starlight/fields";
import {mayraEditorFields} from "./hindu-wedding/mayra/fields";
import {kalyanamEditorFields} from "./south-indian-wedding/kalyanam/fields";
import {niqahEditorFields} from "./muslim-wedding/niqah/fields";
import {vowsEditorFields} from "./christian-wedding/vows/fields";
import {beyondEditorFields} from "./christian-wedding/beyond/fields";
import { assets as mayraAssets } from "./hindu-wedding/mayra/assets";
import { assets as laavanAssets } from "./sikh-wedding/laavan/assets";
import { assets as hitchedAssets } from "./hindu-wedding/hitched/assets";

// Dynamic template loader - maps slug to template component
const templateMap = {
  hitched: dynamic(() => import("./hindu-wedding/hitched/page"), { loading: () => <div>Loading...</div> }),
  biye: dynamic(() => import("./hindu-wedding/biye/page"), { loading: () => <div>Loading...</div> }),
  aura: dynamic(() => import("./hindu-wedding/aura/page"), { loading: () => <div>Loading...</div> }),
  laavan: dynamic(() => import("./sikh-wedding/laavan/page"), { loading: () => <div>Loading...</div>  }),
  starlight: dynamic(() => import("./sikh-wedding/starlight/page"), { loading: () => <div>Loading...</div>  }),
  mayra: dynamic(() => import("./hindu-wedding/mayra/page"), { loading: () => <div>Loading...</div>  }),
  kalyanam: dynamic(() => import("./south-indian-wedding/kalyanam/page"), { loading: () => <div>Loading...</div>  }),
  niqah: dynamic(() => import("./muslim-wedding/niqah/page"), { loading: () => <div>Loading...</div>  }),
  vows: dynamic(() => import("./christian-wedding/vows/page"), { loading: () => <div>Loading...</div>  }),
  beyond: dynamic(() => import("./christian-wedding/beyond/page"), { loading: () => <div>Loading...</div>  }),
  sohala: dynamic(() => import("./hindu-wedding/sohala/page"), { loading: () => <div>Loading...</div> }),
};

const templateFieldConfigs = {
  hitched: hitchedEditorFields,
  biye: biyeEditorFields,
  aura: auraEditorFields,
  laavan: laavanEditorFields,
  starlight: starlightEditorFields,
  mayra: mayraEditorFields,
  kalyanam: kalyanamEditorFields,
  niqah: niqahEditorFields,
  vows: vowsEditorFields,
  beyond: beyondEditorFields,
  sohala: sohalaEditorFields,
};

export function getAvailableTemplates() {
  return Object.keys(templateMap);
}

export function getTemplateComponent(slug) {
  return templateMap[slug] || null;
}

export function getTemplateFieldConfig(slug) {
  return templateFieldConfigs[slug] || null;
}

export const templateComponents = templateMap;
export const templateFields = templateFieldConfigs;

export const templateMetadata = {
  // hitched: {
  //   title: "Hitched",
  //   description: "A modern and elegant wedding invitation",
  //   category: "Wedding",
  //   indprice: 2999,
  //   usaprice: 39,
  //   paid: true,
  // },
};


export const templateAssets = {
  mayra: mayraAssets,
  laavan: laavanAssets,
  hitched: hitchedAssets,
};