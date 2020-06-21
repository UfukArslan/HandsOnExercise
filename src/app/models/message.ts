export type Alignment = 'left' | 'center' | 'right';

export class Message {
    id: number;
    content: string;
    postedAt: Date;	
    postedBy: 'me' | 'them';	
    alignment: Alignment;	
    read: boolean;	
}
