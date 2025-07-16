---
sidebar_position: 1
title: Quick start
---
# Getting Started

Smartbase Admin is a powerful extension for Django projects, providing a customizable admin interface. Follow the steps below to install and configure it in your project.

![Dashboard](/img/screenshots/dashboard_big.png)

---

## 1. Install Smartbase Admin

Begin by installing the Smartbase Admin package using `pip`:

```bash
pip install django-smartbase-admin
```

Ensure that django-smartbase-admin and its dependencies are included in your Django settings. Open your `settings.py` file and add the following to `INSTALLED_APPS`:
```python
INSTALLED_APPS = [
    # other apps
    "django_smartbase_admin",
    "easy_thumbnails",
    "widget_tweaks",
    "ckeditor",
    "ckeditor_uploader",
]
```

## 2. Add Admin URL Configuration
In your project’s `urls.py`, register the Smartbase Admin site by importing sb_admin_site and adding the path:
```python
from django_smartbase_admin.admin.site import sb_admin_site

urlpatterns = [
    path("sb-admin/", sb_admin_site.urls),
    # other paths
]
```
This makes the Smartbase Admin interface accessible at `/sb-admin/`

## 3. Define the SmartBase Admin Configuration
In your project, for example in `config` package create a file called `sbadmin_config.py` with the following content:
```python
from django_smartbase_admin.engine.configuration import SBAdminConfigurationBase, SBAdminRoleConfiguration
from django_smartbase_admin.views.dashboard_view import SBAdminDashboardView
from django_smartbase_admin.engine.menu_item import SBAdminMenuItem

config = SBAdminRoleConfiguration(
    default_view=SBAdminMenuItem(view_id="dashboard"),
    menu_items=[
        SBAdminMenuItem(view_id="dashboard", icon="All-application"),
    ],
    registered_views=[
        SBAdminDashboardView(widgets=[], title="Dashboard"),
    ],
)

class SBAdminConfiguration(SBAdminConfigurationBase):
    def get_configuration_for_roles(self, user_roles):
        return config
```
You can learn more about configuring menu in [🔗 Menu section](/docs/menu).
## 4. Reference the Configuration in `settings.py`
```python
SB_ADMIN_CONFIGURATION = "config.sbadmin_config.SBAdminConfiguration"
```

## 5. Add Locale Middleware
Add the following middleware to support internationalization:
```python
MIDDLEWARE = [
    # Other middleware...
    'django.middleware.locale.LocaleMiddleware',
]
```