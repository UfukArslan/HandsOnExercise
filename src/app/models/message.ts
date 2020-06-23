export type Alignment = 'left' | 'center' | 'right';

export class Message {
    id: number;
    content: string;
    postedAt: Date;	
    postedBy: 'me' | 'them';	
    alignment: Alignment;	
    read: boolean;	

    constructor () {
        this.alignment = 'left';
        this.content = '';
        this.id = null;
        this.postedAt = null;
        this.postedBy = 'me';
        this.read = true ;

    }
}
