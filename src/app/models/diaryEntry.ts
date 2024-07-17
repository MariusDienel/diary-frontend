export class DiaryEntry {
  id: string;
  title: string;
  content: string;
  date: Date;

  constructor(id: string, title: string, content: string, date: Date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.date = date;
  }
}
