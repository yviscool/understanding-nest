import { Module } from '@nestjs/common';
import { AModule } from './A/a.module';
import { BModule } from './B/b.module';
import { CModule } from './C/c.module';
import { DModule } from './D/d.module';


@Module({
    imports: [AModule, BModule, CModule, DModule],
})
export class ApplicationModule { }