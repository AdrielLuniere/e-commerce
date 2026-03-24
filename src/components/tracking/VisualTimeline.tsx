import { CheckCircle2, Circle, Truck, Package, Clock } from "lucide-react";

interface TimelineEvent {
  status: string;
  date: string;
  description: string;
  completed: boolean;
  current: boolean;
}

export default function VisualTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative border-l-2 border-border ml-4 md:ml-6 pb-4">
      {events.map((event, index) => {
        let IconElement;
        
        switch (event.status.toLowerCase()) {
          case 'pedido confirmado':
            IconElement = Package;
            break;
          case 'pagamento aprovado':
            IconElement = CheckCircle2;
            break;
          case 'em separação':
            IconElement = Clock;
            break;
          case 'em transporte':
            IconElement = Truck;
            break;
          case 'entregue':
            IconElement = CheckCircle2;
            break;
          default:
            IconElement = Circle;
        }

        return (
          <div key={index} className="mb-10 ml-8 last:mb-0 relative">
            <span 
              className={`absolute -left-[43px] flex h-10 w-10 items-center justify-center rounded-full border-4 border-card ${
                event.completed 
                  ? 'bg-primary text-primary-foreground' 
                  : event.current
                    ? 'bg-blue-500 text-white animate-pulse'
                    : 'bg-muted text-muted-foreground'
              }`}
            >
              <IconElement className="h-4 w-4" />
            </span>
            
            <div className={`rounded-xl border p-4 ${event.current ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : 'bg-card'}`}>
              <h3 className={`font-bold text-lg mb-1 flex items-center justify-between ${
                event.completed ? 'text-primary' : event.current ? 'text-blue-600 dark:text-blue-400' : 'text-muted-foreground'
              }`}>
                {event.status}
                <span className="text-xs font-normal text-muted-foreground block md:inline">{event.date}</span>
              </h3>
              <p className="text-sm text-muted-foreground">{event.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
