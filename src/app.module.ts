import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [ 
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        PrismaModule,
        UserModule,
        PostModule
    ]
})
export class AppModule {}

