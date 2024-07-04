# Quickstart

## Installation

```bash
pip install django-smartbase-admin
```

Add the following packages to your `INSTALLED_APPS` in `settings.py`:
``` py title="settings.py"
    INSTALLED_APPS = [
        ...
        'django_smartbase_admin',
        'easy_thumbnails',
        'widget_tweaks',
        'nested_admin',
        ...
    ]
    ```
```
## Configuration
**Create Configuration File**

Create a file named `sb_admin_configuration.py` at the scope of `settings.py`. Add the following configuration code:
``` py title="sb_admin_configuration.py"
from django_smartbase_admin.engine.configuration import SBAdminConfigurationBase, SBAdminRoleConfiguration
from django_smartbase_admin.views.dashboard_view import SBAdminDashboardView
from django_smartbase_admin.engine.menu_item import SBAdminMenuItem

config = SBAdminRoleConfiguration(
    default_view=SBAdminMenuItem(view_id="dashboard"),
    menu_items=[
        SBAdminMenuItem(view_id="dashboard", icon="All-application")
    ],
    registered_views=[
        SBAdminDashboardView(widgets=[], title="Dashboard")
    ]
)

class SBAdminConfiguration(SBAdminConfigurationBase):
    def get_configuration_for_roles(self, user_roles):
        return config
```

add highlighted code to your `urls.py` file:
``` py hl_lines="1 5" title="urls.py"
from django_smartbase_admin.admin.site import sb_admin_site

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sb-admin/', sb_admin_site.urls),
]

```


#### Dashboard widgets
Widgets are components that can be added to the dashboard to display information or provide functionality. The following widget types are available:

`SBAdminDashboardListWidget`: Displays a list of items from a model.

`SBAdminDashboardChartWidget`: Displays a chart based on data from a model.

`SBAdminDashboardChartWidgetByDate`: Displays a chart based on data from a model with date filtering.

`SBAdminDashboardLineChartWidgetByDate`: Displays a line chart based on data from a model with date filtering.

`SBAdminChartAggregateSubWidget`: Displays an aggregate value from a model.


```py title="sb_admin_configuration.py"
...
registered_views=[
    SBAdminDashboardView(
        widgets=[
            SBAdminDashboardListWidget(
                name="Posts",
                model=Post,
                list_display=["title", "published_date"],
                list_per_page=10
            )
        ],
        title="Dashboard",
    ),
],
...
```

**Link Configuration**

Add the path to your configuration file in `settings.py`:
``` py title="settings.py"
SB_ADMIN_CONFIGURATION = "config.sbadmin_config.SBAdminConfiguration"
```
**Add Middleware**

Add the `LocaleMiddleware` to your `MIDDLEWARE` in `settings.py`:
``` py title="settings.py"
MIDDLEWARE = [
    ...
    'django.middleware.locale.LocaleMiddleware',
    ...
]
```

## Usage

### Adding items to side bars

In file sb_admin_configuration.py, add the following code to add items to the side bar:

``` py title="sb_admin_configuration.py"
from django_smartbase_admin.engine.menu_item import SBAdminMenuItem

class SBAdminRoleConfiguration(
    menu_items = [
        SBAdminMenuItem(
            view_id="blog_post",
            label="Post",
            sub_items=[], # Fill with sub items for dropdown menu
            icon="Table-report",
        ), # Add your menu items here
    ]
)
```

the sub_items attribute is a list of SBAdminMenuItem 
objects that will be displayed as a dropdown menu when the user 
hovers over the parent menu item.

### Registration of views
create a file sb_admin.py in same directory as your models.py file 
and add the following code to register your models:

#### Simple views
``` py title="sb_admin.py"
  @admin.register(Category, site=sb_admin_site)
  class CategorySBAdmin(SBAdmin):
      sbadmin_list_display = ("name",)
      sbadmin_fieldsets = [
          (None, {
              "fields": ["name"]
          })
      ]
```
#### Views with inlines
``` py title="sb_admin.py"
class CategoryInline(SBAdminTableInline):
    model = Post.categories.through # Many to many relationship model

    
@admin.register(Post, site=sb_admin_site)
class PostSBAdmin(SBAdmin):
    sbadmin_list_display = ("title", "published_date", "author")  # List of fields to display in the list view
    sbadmin_fieldsets = [
        (None, {
            "fields": ["title", "content", "author", "categories"]  # Fields to display in the form view
        })
    ]
    inlines = [CategoryInline]
    sbadmin_tabs = {
        "Post": [None],
        "Categories": [CategoryInline]
    }
```

#### Pagination

To set pagination for a view, add the following code to the view class:

``` py title="sb_admin.py"
@admin.register(Post, site=sb_admin_site)
class PostSBAdmin(SBAdmin):
    list_per_page = 25 # Sets the number of items to display per page
    sbadmin_list_display = ("title", "published_date", "author")
    ...
```