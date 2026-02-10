import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { Button } from "../../button/button";
import { FileService } from '../../../services/file-service';

@Component({
  selector: 'app-jump-back-in-dialog',
  imports: [Button],
  templateUrl: './jump-back-in-dialog.html',
  styleUrl: './jump-back-in-dialog.scss',
})
export class JumpBackInDialog implements OnInit {
  private fileService = inject(FileService);
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();
  public fileName = signal("");

  ngOnInit(): void {
    this.fileName.set(this.fileService.file.fileName);
  }

  confirm() {
    this.confirmed.emit();
  }

  cancel() {
    this.cancelled.emit();
  }
}
