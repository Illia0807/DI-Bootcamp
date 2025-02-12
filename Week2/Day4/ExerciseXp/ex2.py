import json


json_file="test.json"
# with open(json_file, 'r') as file_obj:
#         my_company=json.load(file_obj)

# print(my_company["company"]["employee"]["payable"]["salary"])
# salary=my_company.get("company",{}).get("employee", {}).get("payable", {}).get("salary")


# my_company["company"]["employee"].setdefault("birth_date",1992)

# with open(json_file, 'w') as file_obj:
#         json.dump(my_company,file_obj, indent=4)


with open(json_file, 'r+') as file_obj:
        my_company=json.load(file_obj)
        my_company["company"]["employee"].setdefault("birth_date", 1992)
        file_obj.seek(0)
        json.dump(my_company, file_obj, indent=4)
        file_obj.truncate()


print(my_company)