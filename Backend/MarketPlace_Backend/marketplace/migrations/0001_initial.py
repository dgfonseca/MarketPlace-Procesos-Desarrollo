# Generated by Django 3.1.6 on 2021-04-09 15:57

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=250, unique=True)),
                ('name', models.CharField(max_length=250)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
                ('date_joined', models.DateTimeField(auto_now_add=True)),
                ('user_type', models.PositiveSmallIntegerField(choices=[(1, 'admin'), (2, 'productor'), (3, 'cliente')])),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='canasta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='cantidad_producto_catalogo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Productor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('direccion', models.CharField(max_length=200)),
                ('fotoProveedor', models.CharField(max_length=500)),
                ('numeroTelefono', models.CharField(max_length=20)),
                ('descripcion', models.CharField(max_length=200)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='marketplace.user')),
            ],
        ),
        migrations.CreateModel(
            name='producto_catalogo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=30)),
                ('precio_por_unidad', models.FloatField()),
                ('fotoProducto', models.CharField(max_length=40)),
                ('unidad', models.CharField(max_length=20)),
                ('activado', models.BooleanField()),
                ('canasta', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='marketplace.canasta')),
            ],
        ),
        migrations.CreateModel(
            name='producto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('precio_por_unidad', models.FloatField()),
                ('cantidad_disponible', models.IntegerField()),
                ('producto_catalogo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='marketplace.producto_catalogo')),
            ],
        ),
        migrations.CreateModel(
            name='OfertaProductor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fechaInicio', models.DateTimeField()),
                ('fechaFin', models.DateTimeField()),
                ('productor', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='marketplace.productor')),
            ],
        ),
        migrations.CreateModel(
            name='CantidadProducto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField(validators=[django.core.validators.MinValueValidator(0)])),
                ('oferta_productor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='marketplace.ofertaproductor')),
                ('producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='marketplace.producto')),
            ],
        ),
    ]
