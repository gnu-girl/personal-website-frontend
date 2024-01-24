import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { FormBuilder, FormControl, ReactiveFormsModule } from "@angular/forms";
import { IProject } from "src/app/Structures/models";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from "@angular/material/dialog";
import { ProjectService } from "src/app/Services/projects.service";

@Component({
  selector: "gg-button-outline",
  templateUrl: "./gg-button-outline.component.html",
  styleUrls: ["./gg-button-outline.component.css"],
})
export class GgButtonOutlineComponent implements OnInit {
  @Input() text = "";

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private projectSvc: ProjectService,
  ) {}

  projectForm = this.formBuilder.nonNullable.group({
    title: "",
    description: "",
  });

  openDialog(template: any) {
    let dialogRef = this.dialog.open(template);

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was canceled");
    });
  }

  onSubmitDialog() {
    this.dialog.closeAll();

    console.log(
      "Closing the dialog after hitting submit. Data = ",
      this.projectForm.value,
    );
    let project: IProject = {
      title: this.projectForm.value.title!,
      description: this.projectForm.value.description!,
    };

    this.projectSvc.addProject(project).subscribe();
  }

  ngOnInit(): void {}
}
