import { Star, ThumbsUp } from "lucide-react";

export default function ProductReviews() {
  const MOCK_REVIEWS = [
    {
      id: "1",
      user: "Rafael Martins",
      date: "Há 2 meses",
      rating: 5,
      content: "Excelente produto! A qualidade do áudio é absurda e o noise cancelling funciona perfeitamente durante meus voos. O design também é super minimalista como eu queria.",
      likes: 12,
    },
    {
      id: "2",
      user: "Juliana Silva",
      date: "Há 4 meses",
      rating: 4,
      content: "Produto muito bom, bateria dura o dia todo. Só não dou 5 estrelas porque achei um pouco pesado após várias horas de uso consecutivo.",
      likes: 5,
    },
    {
      id: "3",
      user: "Lucas Cardoso",
      date: "Há 1 semana",
      rating: 5,
      content: "Chegou super rápido, antes do prazo estimado. A embalagem é premium e a qualidade do item supera as fotos. Recomendo muito a loja e o fabricante.",
      likes: 1,
    }
  ];

  return (
    <div className="mt-16 w-full border-t py-12">
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-black">Avaliações dos Clientes</h2>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center text-yellow-500">
              <Star className="h-6 w-6 fill-current" />
              <b className="ml-2 text-2xl text-foreground">4.8</b>
            </div>
            <span className="text-muted-foreground">de 5 (128 avaliações)</span>
          </div>
        </div>
        <button className="mt-4 h-12 rounded-xl border border-primary px-8 font-bold text-primary transition-all hover:bg-primary hover:text-white md:mt-0">
          Avaliar Produto
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_REVIEWS.map((review) => (
          <div key={review.id} className="rounded-2xl border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{review.date}</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              "{review.content}"
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold">{review.user}</span>
              <button className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary">
                <ThumbsUp className="h-4 w-4" />
                {review.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 flex justify-center">
        <button className="text-sm font-bold text-primary underline hover:text-primary/80">
          Ver todas as avaliações
        </button>
      </div>
    </div>
  );
}
