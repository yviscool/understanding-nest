import { Module } from '@nestjs/common';
import { CModule } from '../C/c.module';
import { BService } from './b.service';

@Module({
	imports: [CModule],
	components: [BService],
	exports: [CModule, BService],
})
export class BModule {

}
