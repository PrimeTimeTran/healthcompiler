type Props = {
  heading?: string
  subheading?: string
}

export default function Hero({
  heading = 'Hero heading',
  subheading = 'Hero subheading',
}: Props) {
  return (
    <section style={{ padding: 64 }}>
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </section>
  )
}
