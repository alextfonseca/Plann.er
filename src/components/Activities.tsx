import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../lib/axios";

interface IActivitiesProps {
  date: string;
  activities: {
    id: string;
    title: string;
    occurs_at: string;
  }[];
}

export function Activities() {
  const { tripId } = useParams();

  const [activities, setActivities] = useState<IActivitiesProps[]>([]);

  async function getActivities() {
    try {
      const { data } = await api.get(`/trips/${tripId}/activities`);
      setActivities(data.activities);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getActivities();
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div className="space-y-2.5" key={index}>
          <div className="flex items-baseline gap-2">
            <span className="text-xl text-zinc-300 font-semibold">
              Dia {format(activity.date, "d")}
            </span>
            <span className="text-xs text-zinc-500">
              {format(activity.date, "EEEE", { locale: ptBR })}
            </span>
          </div>

          {activity.activities.length <= 0 ? (
            <p className="text-zinc-500 text-sm">
              Nenhuma atividade cadastrada nessa data.
            </p>
          ) : (
            <div>
              {activity.activities.map((activity, index) => (
                <div className="space-y-2.5" key={index}>
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100 ">{activity.title}</span>
                    <time className="text-zinc-400 text-sm ml-auto">
                      {format(new Date(activity.occurs_at), "HH:mm", {
                        locale: ptBR,
                      })}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
