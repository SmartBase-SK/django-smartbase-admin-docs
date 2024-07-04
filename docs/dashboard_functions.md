 ## Dashboard Functions

### Configuration files
#### SBAdminConfiguration
This function allows us to return a configuration object based on the user's roles. The configuration object should be an instance of `SBAdminRoleConfiguration`.
```python
class SBAdminConfiguration(SBAdminConfigurationBase):
    def get_configuration_for_roles(self, user_roles):
        return config
```
#### SBAdminRoleConfiguration
This class is used to configure the dashboard for a specific role. With this configuration we can control what will
be displayed in the dashboard and in menu items. 

```python
class SBAdminRoleConfiguration(metaclass=Singleton):
    default_view = None  # SBAdminMenuItem usually with view_id="dashboard"
    registered_views = None  
    view_map = None
    autocomplete_map = None
    menu_items = None
    global_filter_form = None
    filters_version = FilterVersions.FILTERS_VERSION_1

    def __init__(
        self,
        default_view=None,
        registered_views=None,
        menu_items=None,
        global_filter_form=None,
        filters_version=None,
    ) -> None:
```

#### SBAdminMenuItem
A class that is used to represent a menu item in the dashboard. It can be used to create a menu item with a label, icon, and sub-items.
can be put to the menu_items attribute of `SBAdminRoleConfiguration`.
```python
class SBAdminMenuItem(object):
    view_id = None
    view = None
    icon = None
    label = None
    url = None
    sub_items = None
    is_active = None
    parent_menu_item = None

    def __init__(
        self,
        view_id=None,
        icon=None,
        label=None,
        url=None,
        sub_items=None,
    ) -> None:
```

#### SBAdminView
A class that takes care of the view configuration and what is displayed in the view, it can be put to the as view_id as attribute of `SBAdminMenuItem`.
```Python
class SBAdminView(SBAdminBaseQuerysetMixin, SBAdminBaseView):
    model = None
    label = None
    title = None
    icon = None
    description = None
    view_id = None
    menu_action = None
    fields = None
    list_display = None
    list_per_page = None
    ordering = None
    list_template_name = "sb_admin/actions/list.html"
    sub_views = None
    field_cache = None

    request_data = None

    def __init__(
        self,
        model=None,
        label=None,
        title=None,
        icon=None,
        description=None,
        view_id=None,
        menu_action=None,
        fields=None,
        list_display=None,
        list_per_page=None,
        ordering=None,
        list_template_name=None,
        global_filter_data_map=None,
        sub_views=None,
    ) -> None:
```

#### SBAdminListAction
A class is used to represent a list action in the dashboard. It can be used to create a list action with a page size, tabulator definition, list actions, and all params.
```python
class SBAdminListAction(SBAdminAction):
    def __init__(
        self,
        view,
        request,
        page_size=None,
        tabulator_definition=None,
        list_actions=None,
        all_params=None,
    ) -> None:
```



### Views
#### SBAdminBaseView
A class that is used to represent a view in the dashboard. 
```python
class SBAdmin(
    SBAdminInlineAndAdminCommon,
    SBAdminBaseQuerysetMixin,
    SBAdminBaseListView,
    SBAdminTranslationStatusMixin,
    NestedModelAdmin,
):
    sbadmin_fieldsets = None
    sbadmin_previous_next_buttons_enabled = False
    sbadmin_tabs = None  
    request_data = None
    menu_label = None
```