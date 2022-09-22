export interface Manage<T> {
    add(t: T): void;
    findByID(id: number);
    update(id, t: T): void;
    removeByID(id: number): void;
}