import { Migration } from '@mikro-orm/migrations';

export class Migration20260128090435 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "post" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "title" varchar(255) not null);`);
  }

}
