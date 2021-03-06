# Generated by Django 3.1.6 on 2021-05-23 01:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Canasta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('activado', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='OfertaProductor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fechaInicio', models.DateTimeField()),
                ('fechaFin', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='ProductoCatalogo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('precioPorUnidad', models.FloatField()),
                ('fotoProducto', models.CharField(max_length=255)),
                ('unidad', models.CharField(max_length=255)),
                ('activado', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('correo', models.EmailField(max_length=255, unique=True)),
                ('contrasena', models.CharField(max_length=255, unique=True)),
                ('esAdmin', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Productor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('direccion', models.CharField(max_length=255)),
                ('fotoProveedor', models.CharField(max_length=255)),
                ('activado', models.BooleanField(default=False)),
                ('numeroTelefono', models.CharField(max_length=255)),
                ('descripcion', models.CharField(max_length=255)),
                ('usuario', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Backend.usuario')),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('precioPorUnidad', models.FloatField()),
                ('cantidadDisponible', models.IntegerField()),
                ('productoCatalogo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Backend.productocatalogo')),
            ],
        ),
        migrations.CreateModel(
            name='PedidoUsuario',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('costoTotal', models.FloatField()),
                ('fechaEntrega', models.DateTimeField()),
                ('direccionEntrega', models.CharField(max_length=255)),
                ('usuario', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Backend.usuario')),
            ],
        ),
        migrations.CreateModel(
            name='PedidoProductor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('costoTotal', models.FloatField()),
                ('ofertaProductor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Backend.ofertaproductor')),
                ('pedidoUsuario', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='Backend.pedidousuario')),
            ],
        ),
        migrations.AddField(
            model_name='ofertaproductor',
            name='productor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Backend.productor'),
        ),
        migrations.CreateModel(
            name='CantidadProductoCatalogo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField()),
                ('canasta', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Backend.canasta')),
                ('pedidoUsuario', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Backend.pedidousuario')),
                ('productoCatalogo', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Backend.productocatalogo')),
            ],
        ),
        migrations.CreateModel(
            name='CantidadProducto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField()),
                ('ofertaProductor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Backend.ofertaproductor')),
                ('pedidoProductor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Backend.pedidoproductor')),
                ('producto', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Backend.producto')),
            ],
        ),
    ]
