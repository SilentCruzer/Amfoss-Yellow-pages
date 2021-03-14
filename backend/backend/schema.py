import graphene
from graphene_django import DjangoObjectType
from phonebook.models import Detail

class DetailType(DjangoObjectType):
    class Meta:
        model = Detail
        fields = ("id", "name", "field","email","github","languages")

class Query(graphene.ObjectType):
    all_details = graphene.List(DetailType)

    def resolve_all_details(root, info):
        return Detail.objects.all() 

schema = graphene.Schema(query=Query)