import { Migration } from '@mikro-orm/migrations';

export class Migration20260128103505 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "post" alter column "created_at" type date using ("created_at"::date);`);
    this.addSql(`alter table "post" alter column "updated_at" type date using ("updated_at"::date);`);
    this.addSql(`alter table "post" alter column "title" type text using ("title"::text);`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "post" alter column "created_at" type timestamptz using ("created_at"::timestamptz);`);
    this.addSql(`alter table "post" alter column "updated_at" type timestamptz using ("updated_at"::timestamptz);`);
    this.addSql(`alter table "post" alter column "title" type varchar(255) using ("title"::varchar(255));`);
  }

}
