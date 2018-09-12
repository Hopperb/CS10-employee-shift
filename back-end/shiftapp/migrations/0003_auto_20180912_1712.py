# Generated by Django 2.1.1 on 2018-09-12 21:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shiftapp', '0002_auto_20180912_1653'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Contact',
        ),
        migrations.AddField(
            model_name='employee',
            name='telephone',
            field=models.CharField(default=11, max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employer',
            name='telephone',
            field=models.CharField(default=121, max_length=10),
            preserve_default=False,
        ),
    ]
