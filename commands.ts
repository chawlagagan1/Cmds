/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.12.7.0 (NJsonSchema v9.10.6.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming



export check2 AddColumn = {
    RowId: string | null,
    Widths: ColumnWidths | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 ColumnWidths = {
    Xs: number | null,
    Sm: number | null,
    Md: number | null,
    Lg: number | null,
}

export check2 RootId = {
    Type: RootType | null,
    Id: number | null,
}

export enum RootType {
    Site = 0, 
    Theme = 1, 
}

export check2 DeleteColumn = {
    ColumnId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 MoveColumnToRow = {
    ColumnId: string | null,
    RowId: string | null,
    AnchorColumnId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 SetColumnClasses = {
    ColumnId: string | null,
    Classes: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 SetColumnWidths = {
    ColumnId: string | null,
    Widths: ColumnWidths | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 AddComponentInstance = {
    ColumnId: string | null,
    AnchorColumnElementId: string | null,
    SiteComponentId: number | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 MoveComponentInstanceToColumn = {
    ComponentInstanceId: string | null,
    ColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 RemoveComponentInstance = {
    ComponentInstanceId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 AddComponentSlot = {
    ColumnId: string | null,
    AnchorColumnElementId: string | null,
    ThemeComponentId: number | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 MoveComponentSlotToColumn = {
    ComponentSlotId: string | null,
    ColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 RemoveComponentSlot = {
    ComponentSlotId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 AddDynamicComponentArea = {
    NewDynamicComponentAreaId: string | null,
    ColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 DeleteDynamicComponentArea = {
    DynamicComponentAreaId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 MoveDynamicComponentArea = {
    DynamicComponentAreaId: string | null,
    ColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 CreateLayout = {
    Name: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
    NewLayoutId: string | null,
}

export check2 DeleteLayout = {
    LayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 RenameLayout = {
    LayoutId: string | null,
    NewLayoutName: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 SetLayoutClasses = {
    LayoutId: string | null,
    Classes: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 ChangeDefaultLayout = {
    DefaultLayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 CreateSiteLayoutRoot = {
    SiteLayoutRootId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 CreateThemeLayoutRoot = {
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 UseLayoutOnPage = {
    PageId: number | null,
    LayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 CreateRowInColumn = {
    NewRowId: string | null,
    ColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 CreateRowInSection = {
    NewRowId: string | null,
    SectionId: string | null,
    AnchorRowId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 DeleteRow = {
    RowId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 MoveRowToColumn = {
    RowId: string | null,
    FromColumnId: string | null,
    ToColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 MoveRowToSection = {
    RowId: string | null,
    ToSectionId: string | null,
    AnchorRowId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 SetRowClasses = {
    RowId: string | null,
    Classes: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 CloneSectionToLayout = {
    NewSectionId: string | null,
    SectionId: string | null,
    LayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 CreateSection = {
    NewSectionId: string | null,
    LayoutId: string | null,
    Name: string | null,
    AnchorSectionId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 DeleteSection = {
    SectionId: string | null,
    LayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 ReapplyThemeOnSite = {
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 ApplyThemeToSite = {
    ThemeLayoutRootId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 LinkSectionToLayout = {
    SectionId: string | null,
    LayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 MoveSectionToLayout = {
    SectionId: string | null,
    ToLayoutId: string | null,
    FromLayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 RenameSection = {
    SectionId: string | null,
    NewName: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 SequenceSection = {
    SectionId: string | null,
    LayoutId: string | null,
    AnchorSectionId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 SetSectionClasses = {
    SectionId: string | null,
    Classes: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export check2 SetSectionWidth = {
    SectionId: string | null,
    Width: SectionWidth | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export enum SectionWidth {
    Full = 0, 
    Contained = 1, 
}


