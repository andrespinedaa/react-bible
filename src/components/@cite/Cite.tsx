import { cite } from "../../utilities/default";

interface CiteProps extends cite {}

function Cite({
  bookName,
  chapterNumber,
  verseNumberStart,
  verseNumberEnd,
}: CiteProps) {
  return (
    <div>
      <span>{bookName} </span>
      <span>{chapterNumber}: </span>
      <span>{verseNumberStart}</span>
      {verseNumberEnd && <span> - {verseNumberEnd}</span>}
    </div>
  );
}

export default Cite;
