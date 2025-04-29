---
title: Integrating to your Django App
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Integrate SmartBase Admin into Your Django App

This page demonstrates how to set up `django-smartbase-admin` with models in your Django app. We will show configuration and show the result using actual model examples: `Post`, `Author`, and `Category`.

SmartBase Admin allows for customizable admin panels, inline relationships, and clean UI navigation — all defined in a structured `sb_admin.py` file.

---

## Step 1: Create `sb_admin.py`

In your app (e.g. `blog/`), create a file named `sb_admin.py`.
This file is used to **register your models** with the SmartBase admin and define how they appear in the UI.

---

## Code: `sb_admin.py` for models of Blog app

### Define inlines

```python title="blog/sb_admin.py"
class CategoryInline(SBAdminTableInline):
    model = Post.categories.through
    verbose_name = "Category"
    verbose_name_plural = "Categories"

class PostInline(SBAdminTableInline):
    model = Post
    verbose_name = "Post"
```

You can learn more about inlines and different inline types in [🔗 Inlines section](/docs/inlines).


### Post admin
<Tabs groupId="1">
<TabItem value="code" label="Code">
```python title="blog/sb_admin.py"
@admin.register(Post, site=sb_admin_site)
class PostSBAdmin(SBAdmin):
    list_per_page = 25  # Sets the number of items to display per page
    sbadmin_list_display = ("title", "published_date", "author")
    sbadmin_fieldsets = [
        (None, {
            "fields": ["title", "content", "author"]
        })
    ]
    inlines = [CategoryInline]
```
</TabItem> 
<TabItem value="list" label="Result - List">
![Category sbadmin](/img/screenshots/posts_sbadmin.png)
</TabItem> 
<TabItem value="detail" label="Result - Detail">
![Category sbadmin](/img/screenshots/post_detail_sbadmin.png)
</TabItem> 
</Tabs>

### Author admin
<Tabs groupId="2">
<TabItem value="code" label="Code">
```python title="blog/sb_admin.py"
@admin.register(Author, site=sb_admin_site)
class AuthorSBAdmin(SBAdmin):
    sbadmin_list_display = ("name",)
    sbadmin_fieldsets = [
        (None, {
            "fields": ["name", "bio"]
        })
    ]
    inlines = [PostInline]
```
</TabItem> 
<TabItem value="screenshot" label="Result - List">
![Category sbadmin](/img/screenshots/authors_sbadmin.png)
</TabItem> 
<TabItem value="detail" label="Result - Detail">
![Category sbadmin](/img/screenshots/author_detail_sbadmin.png)
</TabItem> 
</Tabs>

### Category admin
<Tabs groupId="3">
<TabItem value="code" label="Code">
```python title="blog/sb_admin.py"
@admin.register(Category, site=sb_admin_site)
class CategorySBAdmin(SBAdmin):
    sbadmin_list_display = ("name",)
    sbadmin_fieldsets = [
        (None, {
            "fields": ["name"]
        })
    ]
```
</TabItem> 
<TabItem value="screenshot" label="Result - List">

![Category sbadmin](/img/screenshots/category_sbadmin.png)

</TabItem> 
</Tabs>
