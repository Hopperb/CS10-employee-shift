# Generated by Django 2.1.1 on 2018-09-12 21:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shiftapp', '0003_auto_20180912_1712'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='telephone',
            field=models.CharField(max_length=14),
        ),
        migrations.AlterField(
            model_name='employer',
            name='telephone',
            field=models.CharField(max_length=14),
        ),
    ]
