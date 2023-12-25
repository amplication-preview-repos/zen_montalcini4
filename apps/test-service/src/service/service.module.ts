import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServiceModuleBase } from "./base/service.module.base";
import { ServiceService } from "./service.service";
import { ServiceController } from "./service.controller";

@Module({
  imports: [ServiceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServiceController],
  providers: [ServiceService],
  exports: [ServiceService],
})
export class ServiceModule {}
