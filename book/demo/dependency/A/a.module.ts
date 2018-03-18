import { Module } from '@nestjs/common';
import { AService } from './a.service'
import { AController } from './a.controller'
import { BModule } from '../B/b.module';

@Module({
	imports: [BModule],
	controllers: [AController],
	components: [AService],
})
export class AModule {

}
