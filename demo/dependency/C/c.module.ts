import { Module } from '@nestjs/common';
import { DModule } from '../D/d.module';
import { CService } from './c.service';

@Module({
	imports: [DModule],
	components: [CService],
	exports: [DModule, CService],
})
export class CModule {

}
