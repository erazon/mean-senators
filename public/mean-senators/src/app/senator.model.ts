export class Senator {
    #_id!: string;
    #description!: string;
    #enddate!: string;
    #leadership_title!: string;
    #role_type!: string;
    #party!: string;
    #person!: {
        firstname: string,
        lastname: string
    };
    #phone!: string;
    #startdate!: string;
    #state!: string;
    #title!: string;
    #title_long!: string;

    get _id(){return this.#_id;}
    get description(){return this.#description;}
    get enddate(){return this.#enddate;}
    get leadership_title(){return this.#leadership_title;}
    get role_type(){return this.#role_type;}
    get party(){return this.#party;}
    get person(){return this.#person;}
    get phone(){return this.#phone;}
    get startdate(){return this.#startdate;}
    get state(){return this.#state;}
    get title(){return this.#title;}
    get title_long(){return this.#title_long;}
}
