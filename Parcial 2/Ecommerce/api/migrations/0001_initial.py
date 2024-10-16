# Generated by Django 4.1.2 on 2024-10-13 02:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Productos',
            fields=[
                ('id_producto', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_prodcuto', models.TextField(max_length=60)),
                ('descripcion_producto', models.TextField(max_length=255)),
                ('precio_producto', models.BigIntegerField()),
                ('imagen_producto', models.ImageField(blank=True, null=True, upload_to='imagen_producto/')),
                ('create_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id_usuario', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre_usuario', models.TextField(max_length=60)),
                ('password', models.TextField(max_length=255)),
            ],
        ),
    ]
