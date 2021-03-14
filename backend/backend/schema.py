import graphene
from graphene_django import DjangoObjectType
from phonebook.models import Detail, SignIn

class DetailType(DjangoObjectType):
    class Meta:
        model = Detail
        fields = ("name", "field","email","github","languages")   

class LoginType(DjangoObjectType):
    class Meta:
        model= SignIn
        fields = ("username","password")

class LoginInput(graphene.InputObjectType):
    username = graphene.String()
    password = graphene.String()

class Login(graphene.Mutation):
    class Arguments:
        input = LoginInput(required=True)

    ok = graphene.Boolean()
    user = graphene.Field(LoginType)

    @staticmethod
    def mutate(root, info, input=None):
        ok=True
        user_instance = SignIn(username=input.username,password=input.password)
        user_instance.save()
        return Login(ok=ok,user=user_instance)

class Query(graphene.ObjectType):
    all_details = graphene.List(DetailType)
    all_login = graphene.List(LoginType)

    def resolve_all_details(root, info):
        return Detail.objects.all() 

    def resolve_all_login(root, info):
        return SignIn.objects.all() 

class Mutation(graphene.ObjectType):
    register = Login.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)