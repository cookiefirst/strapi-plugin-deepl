const simpleContentType = createSimpleContentType(true)

function createSimpleContentType(localized) {
  return {
    pluginOptions: {
      i18n: {
        localized,
      },
    },
    kind: 'collectionType',
    attributes: {
      title: {
        type: 'string',
        pluginOptions: {
          i18n: {
            localized: true,
          },
        },
      },
    },
  }
}

function createRelationContentType(
  relationType,
  inverseOrMapped,
  translated,
  target
) {
  return {
    pluginOptions: {
      i18n: {
        localized: !!translated,
      },
    },
    kind: 'collectionType',
    attributes: {
      related: {
        type: 'relation',
        relation: relationType,
        target: target,
        ...inverseOrMapped,
      },
    },
  }
}

function createContentTypeWithComponent(
  component,
  { translated = true, repeatable = false }
) {
  return {
    pluginOptions: {
      i18n: {
        localized: !!translated,
      },
    },
    kind: 'collectionType',
    attributes: {
      component: {
        pluginOptions: {
          i18n: {
            localized: true,
          },
        },
        type: 'component',
        component,
        repeatable,
      },
    },
  }
}

function createContentTypeWithDynamicZone(components, { translated = true }) {
  return {
    pluginOptions: {
      i18n: {
        localized: !!translated,
      },
    },
    kind: 'collectionType',
    attributes: {
      dynamic_zone: {
        pluginOptions: {
          i18n: {
            localized: true,
          },
        },
        type: 'dynamiczone',
        components,
      },
    },
  }
}

const complexContentType = {
  pluginOptions: {
    i18n: {
      localized: true,
    },
  },
  kind: 'collectionType',
  attributes: {
    title: {
      type: 'string',
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    content: {
      type: 'richtext',
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    slug: {
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
      type: 'uid',
      targetField: 'title',
    },
    not_translated_field: {
      pluginOptions: {
        i18n: {
          localized: false,
        },
      },
      type: 'string',
    },
    enumeration: {
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
      type: 'enumeration',
      enum: ['option_a', 'option_b', 'option_c'],
    },
    dynamic_zone: {
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
      type: 'dynamiczone',
      components: ['simpleComponent', 'twoFieldComponent'],
    },
    child_component: {
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
      type: 'component',
      component: 'simpleComponent',
    },
    repeated_child_component: {
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
      repeatable: true,
      type: 'component',
      component: 'twoFieldComponent',
    },
  },
}

module.exports = {
  simpleContentType,
  createSimpleContentType,
  complexContentType,
  createRelationContentType,
  createContentTypeWithComponent,
  createContentTypeWithDynamicZone,
}
