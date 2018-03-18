import { Module } from '@nestjs/common';
import { DService } from './d.service';
@Module({
	components: [DService],
	exports: [DService]
})
export class DModule {

}
