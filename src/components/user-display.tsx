import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

export default function DisplayUsers({ props }: { props: User[] }) {
  return (
    <>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        {props.map((user) => {
          return (
            <>
              <Card className="flex flex-col w-2/12">
                <CardHeader>
                  <CardTitle className="text-center">
                    {user.nome} {user.cognome}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <div>
                    <p>
                      {user.nome} {user.nome}
                    </p>
                  </div>
                  <div>
                    <p>
                      {user.citta}, {user.provincia}, {user.cap}
                    </p>
                    <p>{user.indirizzo}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button>Modifica</Button>
                  <Button>Elimina</Button>
                </CardFooter>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
