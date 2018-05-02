export default class Todo {
  _id: number;
  title: string;
  description: string;
  date: Date;
  status: string;

  constructor() {
    this.title = '';
    this.description = '';
    this.date = new Date();
    this.status = '';
  }

  static generateMockTodo(): Todo {
    return {
      _id: new Date().valueOf(),
      title: 'Todo Title',
      description: 'Todo description',
      date: new Date(),
      status: 'Todo status'
    };
  }
}
