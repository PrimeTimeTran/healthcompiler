import Hero from './Hero'
import RichText from './RichText'
import TwoColumn from './TwoColumn'
import ImageBlock from './ImageBlock'

const config: { [key: string]: ComponentConfig<any, any, any> } = {
  components: {
    Hero: {
      render: Hero,
      fields: {
        heading: { type: 'text' },
        subheading: { type: 'text' },
      },
      schema: {
        heading: {
          type: 'string',
          label: 'Heading',
        },
        subheading: {
          type: 'string',
          label: 'Subheading',
        },
      },
    },
    RichText: {
      render: RichText,
      fields: {
        body: { type: 'text' },
      },
      schema: {
        body: { type: 'text', label: 'Body Content' },
      },
    },
    TwoColumn: {
      render: TwoColumn,
      schema: {
        left: { type: 'text', label: 'Left Column' },
        right: { type: 'text', label: 'Right Column' },
      },
    },
    ImageBlock: {
      render: ImageBlock,
      fields: {
        url: { type: 'text' },
      },
      schema: {
        image: { type: 'media', label: 'Image' },
      },
    },
  },
  root: {},
}

export default config
