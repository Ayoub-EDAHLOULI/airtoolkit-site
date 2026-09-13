const QUESTIONS = [
  {
    question: "Placeholder question one?",
    answer: "Placeholder answer text.",
  },
  {
    question: "Placeholder question two?",
    answer: "Placeholder answer text.",
  },
  {
    question: "Placeholder question three?",
    answer: "Placeholder answer text.",
  },
  {
    question: "Placeholder question four?",
    answer: "Placeholder answer text.",
  },
];

export default function Faq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold text-text sm:text-4xl">
          Placeholder page title — &quot;Frequently asked questions&quot;
        </h1>

        <div className="mt-12 flex flex-col divide-y divide-border border-t border-border">
          {QUESTIONS.map((item) => (
            <div key={item.question} className="py-6">
              <h3 className="font-semibold text-text">{item.question}</h3>
              <p className="mt-2 text-sm text-subtext">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
