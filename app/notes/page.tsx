import Link from "next/link";
import Note from "@/components/ui/Notes";

async function getNotes() {
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records",
    { cache: "no-store" } // SSR, similar to getServerSideProps()
  );
  const data = await response.json();
  return data?.items as any[];
}

export default async function NoteDashboard() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes!</h1>
      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
