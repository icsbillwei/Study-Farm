class TimelineObject {

    id: number;
    username: string;
    percentage: number;
    dueDate: Date;

    constructor(id: number, username: string, percentage: number, dueDate: Date) {
        this.id = id;
        this.username = username;
        this.percentage = percentage;
        this.dueDate = dueDate;
    }
}


export default TimelineObject