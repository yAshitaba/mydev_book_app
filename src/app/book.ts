export class Book {
    book_id: number;
    title: string;
    author: string;
    publisher: string;
    published_date: string;
    isbn: string;
    category_id: number;
    rate: number;
    page_url: string;
    cover_image_url: string;
    memo: string;
    delete_flg: string;
}
function getPublishedDate() {
    return new Date(this.published_date);
}
