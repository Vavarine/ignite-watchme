import { Genre } from "../App";
import { Button } from "./Button";

interface SidebarProps {
  genres: Genre[];
  selectedGenreId: Genre["id"];
  handleClickButton: (id: Genre["id"]) => void;
}

export function SideBar({ genres, selectedGenreId, handleClickButton }: SidebarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
