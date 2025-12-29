type Props = {
  url?: string
  image?: {
    url: string
    alternativeText?: string
  }
}

export default function ImageBlock({ image }: Props) {
  return (
    <section style={{ padding: 32 }}>
      <img
        src={'https://placehold.co/600x400'}
        style={{ height: 100, width: 100 }}
      />
    </section>
  )
}
