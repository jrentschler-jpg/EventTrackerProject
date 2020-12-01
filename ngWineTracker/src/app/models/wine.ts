export class Wine {
  id: number;
  name: string;
  type: string;
  color: string;
  flavor: string;
  description: string;
  rating: number;
  cost: number;
  yearProduced: string;
  review: string;
  image: string;

  constructor(
    id?: number,
    name?: string,
    type?: string,
    color?: string,
    flavor?: string,
    description?: string,
    rating?: number,
    cost?: number,
    yearProduced?: string,
    review?: string,
    image?: string
  ){
    this.id= id;
    this.name= name;
    this.type= type;
    this.color= color;
    this.flavor= flavor;
    this.description= description;
    this.rating= rating;
    this.cost= cost;
    this.yearProduced= yearProduced;
    this.review= review;
    this.image= image;
  }

}
