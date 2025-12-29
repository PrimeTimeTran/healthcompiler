type Props = {
  left?: string;
  right?: string;
};

export default function TwoColumn({ left, right }: Props) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24,
        padding: 32,
      }}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: left ?? "<p>Left column</p>",
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: right ?? "<p>Right column</p>",
        }}
      />
    </section>
  );
}
