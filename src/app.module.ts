import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { DesafiosModule } from './desafios/desafios.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:mongodb@cluster0.lkryr.mongodb.net/smartranking?retryWrites=true&w=majority&appName=Cluster0'),
    JogadoresModule,
    CategoriasModule,
    DesafiosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
