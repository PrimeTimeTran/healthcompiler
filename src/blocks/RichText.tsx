type Props = {
  body?: string
}

export default function RichText({ body = 'Body' }: Props) {
  return (
    <section style={{ padding: 32 }}>
      <div
        dangerouslySetInnerHTML={{
          __html: body ?? '<p>Add some content</p>',
        }}
      />
    </section>
  )
}
