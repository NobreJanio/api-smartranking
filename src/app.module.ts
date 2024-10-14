import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:mongodb@cluster0.lkryr.mongodb.net/smartranking?retryWrites=true&w=majority&appName=Cluster0'),
    JogadoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
