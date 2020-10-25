import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from "typeorm";
import Image from "./Image";

@Entity("orphanages")
export default class Orphanage {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  // There's no @Column() because this is not a database column
  // It's the relationship from one Orphanage to any Images
  // The type is an array of images, because an orphanage has multiple images
  // Cascade makes the images being registered or updated every time a orphanage item is created or updated, in cascade effect
  @OneToMany(
    () => Image,
    image => image.orphanage,
    { cascade: ["insert", "update"] }
  )
  @JoinColumn({ name: "orphanage_id" })
  images: Image[];
}
