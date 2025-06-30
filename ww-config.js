export default {
  editor: {
    label: {
      en: "shadcn Switch",
      fr: "Interrupteur shadcn"
    },
    icon: 'fas fa-toggle-on',
    bubble: {
      icon: 'fas fa-toggle-on'
    },
    deprecated: false
  },
  properties: {
    checked: {
      label: {
        en: "Checked",
        fr: "Activé"
      },
      type: "OnOff",
      defaultValue: false,
      bindable: true,
      section: "data"
    },
    disabled: {
      label: {
        en: "Disabled",
        fr: "Désactivé"
      },
      type: "OnOff",
      defaultValue: false,
      bindable: true,
      section: "behavior"
    },
    required: {
      label: {
        en: "Required",
        fr: "Requis"
      },
      type: "OnOff",
      defaultValue: false,
      section: "validation"
    },
    label: {
      label: {
        en: "Label",
        fr: "Libellé"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "content"
    },
    description: {
      label: {
        en: "Description",
        fr: "Description"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "content"
    },
    size: {
      label: {
        en: "Size",
        fr: "Taille"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "sm", label: { en: "Small", fr: "Petit" } },
          { value: "default", label: { en: "Default", fr: "Par défaut" } },
          { value: "lg", label: { en: "Large", fr: "Grand" } }
        ]
      },
      defaultValue: "default",
      section: "appearance"
    },
    wewebVariable: {
      label: {
        en: "Weweb variable",
        fr: "Variable Weweb"
      },
      type: "Variable",
      bindable: true,
      section: "data"
    },
    changeWorkflowId: {
      label: {
        en: "Change workflow",
        fr: "Workflow de changement"
      },
      type: "WorkflowId",
      bindable: true,
      section: "behavior"
    },
    customClasses: {
      label: {
        en: "Custom CSS classes",
        fr: "Classes CSS personnalisées"
      },
      type: "Text",
      bindable: true,
      section: "style"
    }
  },
  events: {
    change: {
      label: {
        en: "On change",
        fr: "Lors du changement"
      },
      default: null
    }
  },
  sections: {
    content: {
      label: { en: "Content", fr: "Contenu" },
      expand: true
    },
    data: {
      label: { en: "Data", fr: "Données" },
      expand: true
    },
    appearance: {
      label: { en: "Appearance", fr: "Apparence" },
      expand: false
    },
    validation: {
      label: { en: "Validation", fr: "Validation" },
      expand: false
    },
    behavior: {
      label: { en: "Behavior", fr: "Comportement" },
      expand: false
    },
    style: {
      label: { en: "Style", fr: "Style" },
      expand: false
    }
  }
}; 